import React, { memo } from "react";

import SingerStyle from "./style";

import { IArtist } from "apis/types/business";
import Card from "../Card";

interface IProps {
  data: IArtist[];
}

const SingerList: React.FC<IProps> = memo((props: any) => {
  const { data } = props;
  console.log(data);

  return (
    <SingerStyle>
      <div className="singers">
        {/* {data.length > 0 &&
          data.map((ar: any) => {
            return (
              <li className="singer" key={ar.id}>
                <div className="singerInfo">
                  <img className="avatar" src={ar.img1v1Url} alt="" />
                  <div className="alias">{ar.name}</div>
                </div>
                <div className="icon">图标</div>
              </li>
            );
          })} */}
        {data.length > 0 &&
          data.map((ar: IArtist) => {
            return <Card key={ar.id} name={ar.name} img={ar.img1v1Url}></Card>;
          })}
      </div>
    </SingerStyle>
  );
});

export default SingerList;
