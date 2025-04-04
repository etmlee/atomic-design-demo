import { Button } from '@/components/atoms/Button'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/atoms/Dialog'
import { DialogDemo } from '@/components/molecules/Dialog'
import React from 'react'

const Footer = () => (
    <DialogFooter>
        <Button variant='destructive' type="submit">Delete</Button>
    </DialogFooter>
)

const Header = () => (
    <DialogHeader>
        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
        <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
        </DialogDescription>
    </DialogHeader>
)

const Trigger = () => {
    return (
        <DialogTrigger asChild>
            <Button variant='destructive'>Delete Profile</Button>
        </DialogTrigger>
    )
}

export const SubmitDialog: React.FC = () => {
    return (
        <DialogDemo 
            header={<Header />}
            footer={<Footer />}
            trigger={<Trigger />}
        />
    )
}