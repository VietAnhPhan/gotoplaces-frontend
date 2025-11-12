import { Button } from "../Button";
import { ContentWrapper } from "../Utilities/Utilities";

function People(props) {
  return (
    <>
      <ContentWrapper>
        <div className="flex justify-between">
          <div className="flex items-center flex-1 gap-x-5">
            <img
              src={props.user.avatarPath}
              alt={`${props.user.fullname}'s avatar`}
              className="max-w-16 rounded-full"
            />
            <div>
              <p>{props.user.fullname}</p>
              <p className="text-sm text-gray-500">@{props.user.username}</p>
              <p>{props.user.bio}</p>
            </div>
          </div>
          <Button className="self-start" text="follow"/>
        </div>
      </ContentWrapper>
    </>
  );
}

export default People;
