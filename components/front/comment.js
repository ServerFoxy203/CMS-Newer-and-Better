import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Comment = (props) => {
  dayjs.extend(relativeTime);

  return (
    <div className="flex flex-row pt-2 pl-2 md-10 md:ml-1 bg-slate-200 mx-3 my-2 rounded-md pb-3">
      <img src="/no-profile-picture.svg" width="10%" height="10%" />

      <div className="flex-col mt-1 ml-1">
        <div className="flex items-center flex-1 px-4 font-bold leading-tight">
          {props.comment.author}
          <span className="ml-2 text-xs font-normal text-gray-500">
            {dayjs(props.comment.created).fromNow()}
          </span>
        </div>
        <div className="flex-1 px-2 ml-8 text-sm font-medium leading-loose text-gray-600">
          {props?.comment?.body}
        </div>
        {/* <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
          <svg
            className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
            viewBox="0 0 95 78"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <button className="inline-flex items-center px-1 -ml-1 flex-column">
          <svg
            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Comment;
