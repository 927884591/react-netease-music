import { IUser } from "@/apis/types/business";
import React, { memo } from "react";
import Card from "../Card";

import UserListStyle from "./style";

interface IProps {
  data?: IUser[];
}

const UserList: React.FC<IProps> = memo((props: IProps) => {
  const { data } = props;
  return (
    <UserListStyle>
      {data &&
        data.map((user: IUser) => {
          return (
            <Card
              key={user.userId}
              name={user.nickname}
              img={user.avatarUrl}
            ></Card>
          );
        })}
    </UserListStyle>
  );
});

export default UserList;
