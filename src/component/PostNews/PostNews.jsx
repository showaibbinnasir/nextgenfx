import { Input, Label, Spinner, Textarea, toast } from "keep-react";
import Example from "../Example/Example";
import { useState } from "react";

const PostNews = () => {
    const [loading, setLoading] = useState(false)
    function formatDate(date) {
        const day = date.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];
        
        const year = date.getFullYear();
        const month = monthNames[date.getMonth()];
        
        // Add suffix to day (st, nd, rd, th)
        const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
                       (day % 10 === 2 && day !== 12) ? 'nd' :
                       (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
        
        return `${day}${suffix} ${month} ${year}`;
      }
      
      const currentDate = new Date();
      console.log(formatDate(currentDate));
    const handleForm = e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const description = form.description.value
        const image = form.thumbnail.files[0];
        const date = currentDate
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
                const data = { title: name, description, image: imageOne, date }
                fetch('https://nextgenfx-backend.vercel.app/news', {
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
            <h1 className="text-4xl text-center py-5">Post a project</h1>
            <div>
                <form onSubmit={handleForm} className="flex justify-center">
                    <div className="flex flex-col gap-5">
                        <fieldset className=" w-[350px] lg:w-[650px] space-y-1">
                            <Label className="text-white" htmlFor="name">Enter news title</Label>
                            <Input required id="name" name="name" placeholder="Enter name" type="text" />
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

export default PostNews;