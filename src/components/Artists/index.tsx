import React, { memo } from "react";
import { IArtist } from "apis/types/business";
import ArtistsStyle from "./style";
interface IProps {
  artists?: IArtist[];
}

const Artists: React.FC<IProps> = memo(({ artists }) => {
  return (
    <ArtistsStyle>
      {artists?.map(({ name }, index) =>
        index !== artists?.length - 1 ? (
          <div key={name}>
            <span className="singer">{name}</span>
            <span className="slash">/</span>
          </div>
        ) : (
          <span key={name} className="singer">
            {name}
          </span>
        )
      )}
    </ArtistsStyle>
  );
});

export default Artists;
