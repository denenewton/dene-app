import PostCard from "./PostCard";

const Profile = ({name,desc ,data, handleEdit, handleDelete }) => {

  return (
    <section className='max-x-xl px-6'>
     
      <div className='mt-10 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3'>
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;


