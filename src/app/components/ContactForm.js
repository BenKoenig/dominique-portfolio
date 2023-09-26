function ContactForm() {
    return (
      <div className="bg-gray-700 p-6 rounded-xl">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="mt-1 p-2 w-full border rounded-md bg-gray-800"
            />
          </div>
  
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-white">
              Title
            </label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="mt-1 p-2 w-full border rounded-md bg-gray-800"
            />
          </div>
  
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-white">
              Description
            </label>
            <textarea 
              id="description" 
              name="description" 
              rows="3" 
              className="mt-1 p-2 w-full border rounded-md bg-gray-800"
            ></textarea>
          </div>
  
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="terms" 
              name="terms" 
              className="h-5 w-5 text-blue-600 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-white">
              Accept terms of service
            </label>
          </div>
  
          <button type="submit" className="bg-orange-300 text-black px-4 py-2 rounded-md hover:bg-orange-400">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default ContactForm;
  