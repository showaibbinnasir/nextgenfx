import { Input, Label, Spinner, Textarea, toast } from "keep-react";
import Example from "../Example/Example";
import { useState } from "react";

const TutorialPost = () => {
    const [loading, setLoading] = useState(false)
    const handleForm = e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const description = form.description.value
        const link = form.link.value
        const image = form.thumbnail.files[0];
        const formData = new FormData()
        formData.append('image', image)
        let imageOne = ""
        fetch("https://api.imgbb.com/1/upload?key=63ff49e7f3a9f352605525982cb4b330", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                imageOne = imageData?.data.url
                const data = { title: name, description, image: imageOne, link }
                fetch('https://nextgenfx-backend.vercel.app/tutorial', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false)
                        toast.success('upload successfully')
                        form.reset()
                    }).catch(err => {
                        setLoading(false)
                        toast.error("Something went wrong")
                    })

            })
    }
    return (
        <div className="text-white">
            <h1 className="text-4xl text-center py-5">Post Tutorial</h1>
            <div>
                <form onSubmit={handleForm} className="flex justify-center">
                    <div className="flex flex-col gap-5">
                        <fieldset className=" w-[350px] lg:w-[650px] space-y-1">
                            <Label className="text-white" htmlFor="name">Enter Tutorial Name</Label>
                            <Input required id="name" name="name" placeholder="Enter name" type="text" />
                        </fieldset>
                        <fieldset className=" w-[350px] lg:w-[650px] space-y-1">
                            <Label className="text-white" htmlFor="link">Enter Tutorial Link</Label>
                            <Input required id="link" name="link" placeholder="Enter link" type="text" />
                        </fieldset>
                        <fieldset className="space-y-1.5 p-2">
                            <Label htmlFor="message" className=" text-white">Enter description</Label>
                            <Textarea required id="message" className="text-black" name="description" placeholder="Write your text" rows={8} />

                        </fieldset>
                        <div className="border border-white">
                            <div className="block">
                                <label
                                    htmlFor="file"
                                    value="Upload file"
                                />
                            </div>
                            <input
                                id="file"
                                type="file"
                                name='thumbnail'

                            />
                        </div>


                        <div className="flex justify-center">
                            {
                                loading ?
                                    <Spinner color="info" size="lg" /> :
                                    <button type="submit"><Example text="Post to feed"></Example></button>
                            }
                        </div>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default TutorialPost;