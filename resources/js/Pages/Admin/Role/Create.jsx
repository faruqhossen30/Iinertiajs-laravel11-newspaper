import { Head, useForm } from '@inertiajs/react';
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/checkbox'
import { Field, Label } from '@/components/fieldset'
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ImageFile from '@/Components/Form/ImageFile';
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { useState } from 'react';

export default function Create({ auth, roles, permissions }) {
    const { data, setData, setStatus, post, processing, errors, reset } = useForm({
        name: '',
        permissionIds: []
    });
    let [selected, setSelected] = useState([])
    // console.log(permissions);

    function submit(e) {
        e.preventDefault()
        post(route('role.store'));
        console.log(data);
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
                                    <p className="text-red-500 font-bold text-xs">{errors.name}</p>
                                </div>
                                <div className="col-span-12">
                                    <CheckboxGroup role="group" aria-label="Discoverability">
                                        {/* <CheckboxField>
                                            <Checkbox
                                                checked={selected.length > 0}
                                                indeterminate={selected.length !== options.length}
                                                onChange={(checked) => setSelected(checked ? options : [])}

                                            />
                                            <Label>Select all</Label>
                                        </CheckboxField> */}

                                        {permissions.map((option, index) => (
                                            <CheckboxField key={index}>
                                                <Checkbox
                                                    name={index}
                                                    checked={data.permissionIds.includes(option.id)}
                                                    value={option.id}
                                                    onChange={(checked) => {
                                                        setData('permissionIds',
                                                            checked ? [...data.permissionIds, option.id] : data.permissionIds.filter((item) => item !== option.id)
                                                        )
                                                    }}
                                                />
                                                <Label>{option.name}</Label>
                                            </CheckboxField>
                                        ))}
                                    </CheckboxGroup>
                                </div>
                            </div>

                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
