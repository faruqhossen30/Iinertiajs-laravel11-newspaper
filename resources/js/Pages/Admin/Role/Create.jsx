import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ImageFile from '@/Components/Form/ImageFile';
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'

export default function Create({ auth, roles, permissions }) {
    const { data, setData, setStatus, post, processing, errors, reset } = useForm({
        name: '',
    });

    // console.log(permissions);

    function submit(e) {
        e.preventDefault()
        post(route('role.store'));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Role" pageOneRoute="role.index" />
            <div
                className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div
                    className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Role Create
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-12 gap-6">

                                <div className="col-span-12 border p-5 rounded">
                                    <Field>
                                        <Label>Role Name</Label>
                                        <Input type="text" name="name" onChange={(e) => setData('name', e.target.value)} />
                                    </Field>
                                    <SubmitButton />

                                    {
                                        permissions.map((item, index) =>  (
                                            // console.log(item)
                                            <div className="col-span-4">
                                                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                                    <div className="px-4 md:px-5 py-5">
                                                        <div>
                                                            <h3 className="text-lg font-normal text-gray-800 capitalize dark:text-gray-200">
                                                                {index}
                                                            </h3>
                                                        </div>
                                                        <div className="space-y-2 py-2">
{item.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
