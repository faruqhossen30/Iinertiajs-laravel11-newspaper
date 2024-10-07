import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ImageFile from '@/Components/Form/ImageFile';
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'


export default function Create({ auth, roles }) {
    const { data, setData, setStatus, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function submit(e) {
        e.preventDefault()
        post(route('admin.store'));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Admin" pageOneRoute="admin.index" />

            <div
                className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div
                    className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Admin Create
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-12 gap-6">

                                <div className="col-span-12 border p-5 rounded">


                                    <div>
                                        <InputLabel isRequired={true} labelFor="name" />
                                        <Input id="name" type="text" name="name" value={data.name}
                                            autoComplete="name" placeholder="name" onChange={(e) => setData('name',
                                                e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                                    </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="Email" />
                                        <Input id="email" type="email" name="email" value={data.email}
                                            autoComplete="email" placeholder="email" onChange={(e) => setData('email',
                                                e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.email}</p>
                                    </div>

                                    <Field>
                                        <Label>Asign Role</Label>
                                        <Select name="role_ids[]" onChange={(e) => setData('role_ids', e.target.value)}>
                                            {
                                                roles.map((item, index) => {
                                                    return <option value={item.id} key={index}>{item.name}</option>
                                                })
                                            }
                                        </Select>
                                        <p className="text-sm text-red-600 mt-2">{errors.role_ids}</p>
                                    </Field>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="password" />
                                        <Input id="password" type="password" name="password" value={data.password}
                                            autoComplete="password" placeholder="password" onChange={(e) => setData('password',
                                                e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.password}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="password_confirmation" />
                                        <Input id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation}
                                            autoComplete="password_confirmation" placeholder="Confirm Password" onChange={(e) => setData('password_confirmation',
                                                e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.password_confirmation}</p>
                                    </div>
                                    <SubmitButton />
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
