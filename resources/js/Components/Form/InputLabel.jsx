export default function InputLabel({ labelFor,isRequired=false }) {
    return (
        <label htmlFor={labelFor} className="block text-sm font-medium dark:text-gray-400 capitalize py-2">
            {labelFor}
            {isRequired ? <span className="text-sm text-red-600">*</span> : <span className="text-xs text-gray-600 px-1">(Optional)</span>}
        </label>
    )
}
