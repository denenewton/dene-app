import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='section-main pt-24'>
      <h1 className='head_text text-left'>
        <span className='dark_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-center max-w-md'>
        {type} and share amazing pots with the world, and let your
        imagination run wild with any blog postting platform
      </p>
      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism' >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Title
          </span>

          <input type="text" value={post.title} className='form_input' onChange={(e) => setPost({ ...post, title: e.target.value })} required />
        </label>
        <label htmlFor="textarea-id">
        <span className='font-satoshi font-semibold text-base text-gray-700'>
        Body
          </span>
         
          <textarea
            id="textarea-id"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            className='form_textarea '
            required
          />

        </label>
        <label htmlFor="tag-id">
        <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tags{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
      
          <input type="text" id="tag-id" value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} className='form_input' />
        </label>
        <div className='flex justify-end items-center  my-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className='px-5 py-1.5 text-sm bg-violet-500 rounded-full text-white' >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>

      </form>
    </section>
  );
};

export default Form;
