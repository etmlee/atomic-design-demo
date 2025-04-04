import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"

export const InputWithLabel: React.FC<{label: string}> = ({label}) => {
    return (
        <div>
            <Label className="mb-1">{label}</Label>
            <Input></Input>
        </div>
    )
}