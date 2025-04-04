import { Button } from "@/components/atoms/Button"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import React from "react"



export const SearchForm: React.FC<{className?: string}> = ({className}) => {
    return (
        <div className={className}>
            <Label className="mb-1">Search the Site</Label>
            <div className="flex">
                <Input className="bg-neutral-100"></Input>
                <Button className="ml-2">Search</Button>
            </div>
        </div>
    )
}