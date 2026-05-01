"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";


const EditProfilePage =  () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            name,
            image,
        });
        router.push("/profile");
    
    }
    return (
        <div className="mx-auto max-w-7xl mt-3 sm:p-20 flex items-center justify-center ">
            <Form className="flex w-96 flex-col gap-4 border border-[color:var(--brand-500-20)] rounded-2xl p-6 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80" onSubmit={onSubmit} >
                <TextField
                    isRequired
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (value.length < 2) {
                            return "Name must be at least 2 characters";
                        }
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="John Doe" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="image"
                    type="url"

                >
                    <Label>Image URL</Label>
                    <Input placeholder="https://example.com/image.jpg" />
                    <FieldError />
                </TextField>
                <div className="flex mt-6">
                    <Button type="submit" className="w-full block">
                        Update Information
                    </Button>

                </div>
            </Form>
        </div>
    );
};

export default EditProfilePage;