
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import ImageFile from '@/Components/Form/ImageFile';
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'
import ThumbnailInput from '@/Components/Form/ThumbnailInput';

export default function Create({ auth, subcategory, categories }) {
    console.log(subcategory);
    const { data, setData, put, post, processing, errors, reset } = useForm({
        name: subcategory.name,
        description: subcategory.description,
        thumbnail: subcategory.thumbnail,
        update_user_id: subcategory.update_user_id,
        status: subcategory.status,
    });



    function submit(e) {
        e.preventDefault()
        post(route('subcategoryupdate', subcategory.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Subcategory" pageOneRoute="subcategory.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit subcategory
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-12 gap-6">

                                <div className="col-span-8 border p-5 rounded">
                                    <Field>
                                        <Label> Select  Category</Label>
                                        <Select name="category_id" value={data.category_id} onChange={(e) => setData('category_id', e.target.value)}>
                                            <option>select category</option>
                                            {
                                                categories.map((cat, index) => {
                                                    return <option value={cat.id} key={index}>{cat.name}</option>
                                                })
                                            }
                                        </Select>
                                    </Field>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="name" />
                                        <Input id="name" type="text" name="name" value={data.name}
                                            autoComplete="name" placeholder="name" onChange={(e) => setData('name',
                                                e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                                    </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <textarea id="description" rows={5} type="file" name="description" placeholder="Write about Category."
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.description}</textarea>
                                        <p className="text-sm text-red-600 mt-2">{errors.description}</p>
                                    </div>
                                    <SubmitButton title={'Update'} />
                                </div>
                                <div className="col-span-4 border p-5 rounded">
                                <div className="w-full">
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <ThumbnailInput name="thumbnail" thumbnail={data.thumbnail} setData={setData}
                                    errors={errors} placeholder="Thumbnail" />
                            </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="status" />
                                        <select id="status" name="status"
                                            className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('status', e.target.value)}>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                        <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
