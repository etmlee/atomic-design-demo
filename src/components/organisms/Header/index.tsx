import { Link } from '@/components/atoms/link'
import React from 'react'
import logo from '@/assets/Ubi-by-Mondo.png'
import { SearchForm } from '@/components/molecules/SearchForm'

export const Header: React.FC = () => {
    return (
        <div className='flex items-center bg-neutral-200 h-20 p-4 w-[1000px] rounded-md'>
            <img src={logo} alt='Logo' className='h-8 mr-8'/>
            <div className='h-full flex gap-x-4 items-center'>
                <Link label='Home'/>
                <Link label='About'/>
                <Link label='Blog'/>
                <Link label='Contact'/>
            </div>
            <SearchForm className='ml-auto'/>
        </div>
    )
}