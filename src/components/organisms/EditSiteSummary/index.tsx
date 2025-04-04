import { Button } from '@/components/atoms/Button'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/atoms/Dialog'
import { DialogDemo } from '@/components/molecules/Dialog'
import { InputWithLabel } from '@/components/molecules/InputWithLabel'
import React from 'react'

const Footer = () => (
    <DialogFooter>
        <Button variant='outline'>Cancel</Button>
        <Button type="submit">Submit</Button>
    </DialogFooter>
)

const Header = () => (
    <DialogHeader>
        <DialogTitle>Edit Site Summary</DialogTitle>
        <DialogDescription>
            Edit the details for your site :)
        </DialogDescription>
    </DialogHeader>
)

const Trigger = () => {
    return (
        <DialogTrigger asChild>
            <Button>Edit Details</Button>
        </DialogTrigger>
    )
}

export const EditSiteSummary: React.FC = () => {
    return (
        <DialogDemo 
            trigger={<Trigger />}
            header={<Header />}
            footer={<Footer />}
        >
                <InputWithLabel label="Site Name" />
                <InputWithLabel label="Address" />
                <InputWithLabel label="NMI" />
                <InputWithLabel label="Export Limit" />
        </DialogDemo>    
    )
}