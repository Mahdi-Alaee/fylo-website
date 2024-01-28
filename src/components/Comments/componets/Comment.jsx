function Comment({body, img, name, job}) {
  return (
    <div className="bg-gray-100 dark:bg-darkBlue3 p-12 rounded-lg">
        {/* body */}
      <p className="text-lg">
        {body}
      </p>
        {/* profile */}
        <div className="mt-6 flex gap-x-4 items-center">
            {/* image */}
            <img className="rounded-full w-10 h-10" src={img} alt="profile" />
            {/* content */}
            <div>
                {/* name */}
                <h6 className="text-sm font-bold tracking-wider">{name}</h6>
                {/* function */}
                <p className="text-xs">{job}</p>
            </div>
        </div>
    </div>
  );
}

export default Comment;
