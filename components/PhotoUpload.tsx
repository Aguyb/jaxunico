'use client'
import { useState, useRef } from 'react'
import { Upload, X, CheckCircle, ImageIcon } from 'lucide-react'

interface PhotoUploadProps {
  onUpload: (url: string) => void
  folder?: string
  label?: string
  currentUrl?: string
  className?: string
}

export default function PhotoUpload({
  onUpload,
  folder = 'general',
  label = 'Upload Photo',
  currentUrl,
  className = '',
}: PhotoUploadProps) {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const [preview, setPreview] = useState<string>(currentUrl || '')
  const [errorMsg, setErrorMsg] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function uploadFile(file: File) {
    // Validate
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Only image files are allowed (JPG, PNG, WebP)')
      setStatus('error')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('File too large. Maximum 10MB.')
      setStatus('error')
      return
    }

    setStatus('uploading')
    setErrorMsg('')

    // Show local preview immediately
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target?.result as string)
    reader.readAsDataURL(file)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      let data
      try { data = await res.json() } catch { throw new Error('Server error — check Cloudinary environment variables in Vercel') }

      if (!res.ok) throw new Error(data?.error || 'Upload failed')

      setPreview(data.url)
      setStatus('success')
      onUpload(data.url)

      // Reset to idle after 2 seconds
      setTimeout(() => setStatus('idle'), 2000)
    } catch (err: any) {
      setErrorMsg(err.message || 'Upload failed. Please try again.')
      setStatus('error')
      setPreview(currentUrl || '')
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) uploadFile(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) uploadFile(file)
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setIsDragging(true)
  }

  function clearPhoto() {
    setPreview('')
    setStatus('idle')
    onUpload('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">
        {label}
      </label>

      {preview ? (
        // Preview state
        <div className="relative rounded-2xl overflow-hidden border-2 border-gray-200 group">
          <img src={preview} alt="Preview" className="w-full h-48 object-cover"/>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="bg-white text-[#1A1A1A] font-bold px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Upload size={14}/> Change
            </button>
            <button
              type="button"
              onClick={clearPhoto}
              className="bg-[#C6002B] text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-[#9B0020] transition-colors flex items-center gap-2"
            >
              <X size={14}/> Remove
            </button>
          </div>
          {status === 'uploading' && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-white font-bold text-lg animate-pulse">Uploading...</div>
            </div>
          )}
          {status === 'success' && (
            <div className="absolute top-3 right-3 bg-green-500 rounded-full p-1">
              <CheckCircle size={16} className="text-white"/>
            </div>
          )}
        </div>
      ) : (
        // Drop zone
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={() => setIsDragging(false)}
          className={`w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all
            ${isDragging ? 'border-[#C6002B] bg-red-50' : 'border-gray-300 hover:border-[#C6002B] hover:bg-gray-50'}
            ${status === 'uploading' ? 'pointer-events-none opacity-60' : ''}
          `}
        >
          {status === 'uploading' ? (
            <>
              <div className="w-10 h-10 border-4 border-[#C6002B] border-t-transparent rounded-full animate-spin mb-3"/>
              <div className="font-semibold text-gray-500">Uploading...</div>
            </>
          ) : (
            <>
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                <ImageIcon size={24} className="text-gray-400"/>
              </div>
              <div className="font-bold text-gray-600 text-base">
                {isDragging ? 'Drop to upload' : 'Click or drag photo here'}
              </div>
              <div className="text-sm text-gray-400 mt-1">JPG, PNG, WebP — max 10MB</div>
            </>
          )}
        </div>
      )}

      {status === 'error' && (
        <div className="mt-2 bg-red-50 border border-red-200 rounded-xl px-4 py-2 text-sm text-red-600 font-semibold flex items-center gap-2">
          <X size={14}/> {errorMsg}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  )
}
