import { useStore } from '@/stores/StoreProvider'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const { userStore } = useStore()

  useEffect(() => {
    userStore.updateImagesToUpload(acceptedFiles)
  }, [acceptedFiles])

  const files = acceptedFiles.map((file) => (
    <li className="flex flex-col items-center" key={file.webkitRelativePath}>
      <img src={URL.createObjectURL(file)} alt="" />
      <p>{file.name}</p>
    </li>
  ))
  return (
    <div className="flex min-h-[400px] w-full flex-col gap-6 border-4 border-dashed border-neutral-300">
      <div {...getRootProps({ className: 'dropzone text-center p-[2rem] h-full' })}>
        <input {...getInputProps()} />
        {!acceptedFiles.length && (
          <p className="mt-[150px] font-medium text-neutral-400">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
        {!!acceptedFiles.length && (
          <div>
            <h4>Attached images ({acceptedFiles.length}):</h4>
            <ul>{files}</ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default observer(Dropzone)
