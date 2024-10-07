'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Field, Label, Switch } from '@headlessui/react'
import { Input, InputGroup } from '@/components/input'
import * as Headless from '@headlessui/react'
import { FaFacebook } from 'react-icons/fa';
import {
    BellIcon,
    CogIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    XMarkIcon,
    UserGroupIcon,
    MagnifyingGlassIcon,
    FlagIcon
} from '@heroicons/react/24/outline'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link, useForm } from '@inertiajs/react'
import SubmitButton from '@/Components/Form/SubmitButton'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Invoices', href: '#' },
    { name: 'Clients', href: '#' },
    { name: 'Expenses', href: '#' },
]
const secondaryNavigation = [
    { name: 'Wesbsite', href: route('settings'), icon: GlobeAltIcon, current: true },
    { name: 'Security', href: route('setting.home'), icon: FingerPrintIcon, current: false },
    { name: 'Social Media', href: route('setting.socialmedia'), icon: BellIcon, current: false },
    { name: 'Plan', href: '#', icon: CubeIcon, current: false },
    { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
    { name: 'Team members', href: '#', icon: UsersIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SettingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        logo: null,
        banner: null,

    });

    function submit(e) {
        e.preventDefault()
        post(route('setting.socialmedia.store'));
    }
    return (
        <AuthenticatedLayout>

            <div className="mx-auto lg:flex border dark:border-gray-700 bg-white dark:bg-slate-900">
                <h1 className="sr-only">General Settings</h1>
                <aside className="flex overflow-x-autolg:block lg:w-64 lg:flex-none border-r">
                    <nav className="flex-none px-4 sm:px-6 lg:px-0 w-full">
                        <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col w-full">
                            {secondaryNavigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-100 text-indigo-600'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
                                            'group flex gap-x-3 rounded-md py-2 pl-5 pr-3 text-sm font-semibold leading-6',
                                        )}
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className={classNames(
                                                item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                'h-6 w-6 shrink-0',
                                            )}
                                        />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <div className="w-full ">
                    <form onSubmit={submit}>
                        <div className="flex space-x-1 items-center py-2 shadow px-5">
                            <CogIcon className="h-6 text-indigo-600" />
                            <span className="text-indigo-600 font-semibold leading-6"></span>
                        </div>
                        <div className="flex  space-y-2 py-3">
                            <div className=' w-1/2 space-y-3 '>
                                <Headless.Field className="flex items-center justify-center gap-6">
                                    <Label>Facebook Group Link</Label>
                                    <InputGroup>
                                        <UserGroupIcon />
                                        <Input name="facebook_group_link"  onChange={(e) => setData('facebook_group_link',
                                                e.target.value)} placeholder="facebook_group_link&hellip;" aria-label="Search" />
                                    </InputGroup>
                                </Headless.Field>

                                <Headless.Field className="flex items-center justify-center gap-8">
                                    <Label>Facebook Page Link</Label>
                                    <InputGroup>
                                        <FlagIcon />
                                        <Input name="facebook_page_link"  onChange={(e) => setData('facebook_page_link',
                                                e.target.value)} placeholder="facebook_page_link&hellip;" aria-label="Search" />
                                    </InputGroup>
                                </Headless.Field>

                                <Headless.Field className="flex items-center justify-center gap-24">
                                    <Label>Facebook link</Label>
                                    <InputGroup >

                                    <FaFacebook className='absolute z-40 top-2' />
                                        <Input name="facebook_link"  className="w-full relative"  onChange={(e) => setData('facebook_link',
                                                e.target.value)} placeholder="facebook_link&hellip;" aria-label="Search" />
                                    </InputGroup>
                                </Headless.Field>

                                <Headless.Field className="flex items-center justify-center gap-24">
                                    <Label>twitter_link</Label>
                                    <InputGroup>
                                        <XMarkIcon />
                                        <Input name="twitter_link"  onChange={(e) => setData('twitter_link',
                                                e.target.value)} placeholder="twitter_link&hellip;" aria-label="Search" />
                                    </InputGroup>
                                </Headless.Field>
                            </div>
                            <div className='px-5 w-1/2 space-y-3 '>


                                <Headless.Field className="flex items-center justify-center gap-24">
                                    <Label>Instagram link</Label>
                                    <InputGroup>

                                        <Input name="instagram_link"  onChange={(e) => setData('instagram_link',
                                                e.target.value)} placeholder="instagram_link&hellip;" aria-label="Search" />
                                    </InputGroup>
                                </Headless.Field>

                                <Headless.Field className="flex items-center justify-center gap-28">
                                    <Label>Linkedin link</Label>
                                    <InputGroup>

                                        <Input name="linkedin_link"   onChange={(e) => setData('linkedin_link',
                                                e.target.value)} placeholder="linkedin_link&hellip;" aria-label="Search" />
                                    </InputGroup>
                                </Headless.Field>

                                <Headless.Field className="flex items-center justify-center gap-28">
                                    <Label>Youtube link</Label>
                                    <InputGroup>

                                        <Input name="youtube_link"  onChange={(e) => setData('youtube_link',
                                                e.target.value)} placeholder="youtube_link&hellip;" aria-label="Search" />
                                    </InputGroup>
                                </Headless.Field>
                            </div>

                        </div>
                        <SubmitButton />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
