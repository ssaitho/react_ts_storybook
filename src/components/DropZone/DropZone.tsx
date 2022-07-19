import React, { FC, useCallback, useState } from 'react'
import Dropzone from 'react-dropzone'
import '../../../assets/stylesheets/index.css'

export interface Accept {
  [key: string]: string[]
}

type Props = {
  accept: Accept
}

export const DropZone: FC<Props> = ({ accept, ...props }) => {
  return (
    <Dropzone {...props} accept={accept} onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  )
}
