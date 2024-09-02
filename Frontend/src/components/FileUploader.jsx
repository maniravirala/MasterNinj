import { useDropzone } from 'react-dropzone'
import { Upload } from 'lucide-react'

export const FileUploader = ({ onFileSelect }) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop: acceptedFiles => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0])
      }
    },
    accept: {
      'application/zip': ['.zip'],
      'application/x-rar-compressed': ['.rar'],
      'application/x-tar': ['.tar']
    },
    maxSize: 10 * 1024 * 1024, // 100MB
    multiple: false
  })

  return (
    <div {...getRootProps()} className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer ${isDragActive ? 'border-primary' : 'border-muted-foreground'}`}>
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
      <p className="mt-2 text-sm text-muted-foreground">
        {acceptedFiles.length > 0 
          ? `File selected: ${acceptedFiles[0].name}`
          : "Drag & drop your project file here, or click to select file"}
      </p>
      <p className="text-xs text-muted-foreground">(Only .zip, .rar, or .tar files up to 100MB are accepted)</p>
    </div>
  )
}