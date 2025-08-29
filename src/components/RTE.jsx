import React from "react";
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form';

const RTE=({name,control,label,defaultValue=""})=>{

    return (
        <div className="m-4">
            {label && <label>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({field: {onChange}})=>(
                    <Editor
                        initialValue={defaultValue}
                        init={{
                            license_key: 'gpl',
                            initialValue:defaultValue,
                            menubar:true,
                            height:500,
                            plugins:[
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'fullscreen',
                                'insertdatetime',
                                'media',
                                'table',
                                'help',
                                'wordcount'
                            ],
                            toolbar:'undo redo | image | preview | casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                            placeholder: "Start typing here...",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}



export default RTE;