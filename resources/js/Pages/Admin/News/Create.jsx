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

export default function Create({ auth, categories, news, divisions, districts, upazilas }) {
    const { data, setData, setStatus, post, processing, errors, reset } = useForm({
        title: '',
        thumbnail: null,
        description: '',
        video_ifrem: '',
        meta_title: '',
        meta_description: '',
        keyword: '',
        division_id: '',
        district_id: '',
        upazila_id: '',
        user_id: '',
        update_user_id: '',
        visibility: null,

    });

    function submit(e) {
        e.preventDefault()
        post(route('news.store'));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="News" pageOneRoute="news.index" />
            <div
                className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div
                    className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        News Create
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-12 gap-6">

                                <div className="col-span-8 border p-5 rounded">
                                    <div>
                                        <InputLabel isRequired={true} labelFor="title" />
                                        <Input id="title" type="text" title="title" value={data.title}
                                            autoComplete="title" placeholder="title" onChange={(e) => setData('title',
                                                e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                    </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <textarea id="description" rows={5} type="file" name="description" placeholder="Write about Category."
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.description}</textarea>
                                        <p className="text-sm text-red-600 mt-2">{errors.description}</p>
                                    </div>
                                    <Field>
                                        <Label>Video Iframe</Label>
                                        <Textarea name="video_ifrem" onChange={(e) => setData('video_ifrem', e.target.value)} />
                                    </Field>


                                    <Field>
                                        <Label>Meta title</Label>
                                        <Input name="meta_title" onChange={(e) => setData('meta_title', e.target.value)} />
                                    </Field>
                                    <Field>
                                        <Label>Description</Label>
                                        <Textarea name="description" onChange={(e) => setData('meta_description', e.target.value)} />
                                    </Field>
                                    <Field>
                                        <Label>Meta Keyword</Label>
                                        <Input name="keyword" onChange={(e) => setData('keyword', e.target.value)} />
                                    </Field>
                                    <Field>
                                        <Label>Visibility</Label>
                                        <Select
                                            name="visibility"
                                            onChange={(e) => setData('visibility', e.target.value)}  >
                                            <option value="show">Show</option>
                                            <option value="hide">Hide</option>
                                            <option value="draft">Draft</option>
                                        </Select>
                                    </Field>
                                    <SubmitButton />
                                </div>
                                <div className="col-span-4 border p-5 rounded">
                                    <div>
                                        <InputLabel isRequired={true} labelFor="thumbnail" />
                                        <ImageFile name="thumbnail" setData={setData} errors={errors}
                                            placeholder="Feature Photo" />
                                    </div>


                                    <label htmlFor="" className='py-6'>Location</label>
                                    <Field>
                                        <Label>Division</Label>
                                        <Select name="division_id" onChange={(e) => setData('division_id', e.target.value)}>
                                            <option>Select Division</option>
                                            {
                                                divisions.map((division, index) => {
                                                    return <option value={division.id} key={index}>{division.name}</option>
                                                })
                                            }
                                        </Select>
                                    </Field>
                                    <Field>
                                        <Label>District</Label>
                                        <Select name="district_id" onChange={(e) => setData('district_id', e.target.value)}>

                                            <option>select district</option>
                                            {
                                                districts.map((district, index) => {
                                                    return <option value={district.id} key={index}>{district.name}</option>
                                                })
                                            }
                                        </Select>
                                    </Field>
                                    <Field>
                                        <Label>Upzilla</Label>
                                        <Select name="upazila_id" onChange={(e) => setData('upazila_id', e.target.value)}>
                                            <option>Select Upazila</option>
                                            {
                                                upazilas.map((upazila, index) => {
                                                    return <option value={upazila.id} key={index}>{upazila.name}</option>
                                                })
                                            }
                                        </Select>
                                    </Field>

                                    {/* <div>
                                        <InputLabel isRequired={true} labelFor="status" />
                                        <select id="status" name="status"
                                            className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('status', e.target.value)}>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                        <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                    </div> */}
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
