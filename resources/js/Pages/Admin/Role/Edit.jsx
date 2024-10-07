
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import { Field, Label } from '@/components/fieldset'

export default function Create({ auth, vot }) {
    console.log(vot);
    const { data, setData, put, post, processing, errors, reset } = useForm({
        description: vot.description,
        start_date: vot.start_date,
        end_date: vot.end_date,
    });
    function submit(e) {
        e.preventDefault()
        put(route('vot.update', vot.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Vot" pageOneRoute="vot.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit Vot
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-12 gap-6">

                                <div className="col-span-12 border p-5 rounded">

                                    <div>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <textarea id="description" rows={5} type="text" name="description" placeholder="Write about Category."
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.description}</textarea>
                                        <p className="text-sm text-red-600 mt-2">{errors.description}</p>
                                    </div>
                                    <Field>
                                        <Label>Start Date</Label>
                                        <Input type="date" value={data.start_date}  name="start_date" onChange={(e) => setData('start_date', e.target.value)} />
                                    </Field>


                                    <Field>
                                        <Label>End Date</Label>
                                        <Input type="date" value={data.end_date} name="end_date" onChange={(e) => setData('end_date', e.target.value)} />
                                    </Field>

                                    {/* <Field>
                                            <Label>Visibility</Label>
                                            <Select
                                                name="visibility"
                                                onChange={(e) => setData('visibility', e.target.value)}  >
                                                <option value="show">Show</option>
                                                <option value="hide">Hide</option>
                                                <option value="draft">Draft</option>
                                            </Select>
                                        </Field> */}
                                    <SubmitButton title={'Update'} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
