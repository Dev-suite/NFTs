import styled from "styled-components";
import history from "../../assets/history.png";

import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalState } from "../../atoms/modaAtom";
import { artIdState, artState } from "../../atoms/artsAtom";


export const EditorsCard = ({
  artImg,
  name,
  no,
  ownerPic,
  ownerName,
  bid,
  style,
  id
}) => {
  const setModal = useSetRecoilState(modalState)
  const setArtId = useSetRecoilState(artIdState)

  const clickHandler = (e) => {
    let id =  +e.target.parentElement.children[1].textContent
    if(id ===0 || isNaN(id)) return

    console.log(id)
    setArtId(id)
    setModal(true)
  }

  return (
    <Wrapper className="mt-5" style={style} onClick={clickHandler}>
      <p style={{ display: 'none' }}>{id}</p>
      <div style={{ padding: "1em" }}>
        <img src={artImg} alt="" />
        <p style={{ display: 'none' }}>{id}</p>
        <div className="name-no my-2">
          <h4>{name}</h4>
          <h4 style={{ color: "#f91a9f" }}>{no}</h4>
        </div>

        <div className="bidder my-2" style={{ fontSize: "15px" }}>
          <p style={{ display: 'none' }}>{id}</p>
          <img src={ownerPic} alt={ownerName} />
          <p style={{ color: "rgba(252, 247, 253, 0.5)" }}>
            Owned by <br /> <span>{ownerName}</span>
          </p>
          <p>
            Current bid <br /> <span>{bid}</span>
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <a target="_blank"
            href="https://opensea.io/"
            rel="noreferrer">
            <Button title="Bid now" className="bid-btn" />
          </a>

          <div className="d-flex align-items-center gap-2">
            <img src={history} alt="history" style={{ width: "15%" }} />
            <Link style={{ fontSize: "14px" }}>View History</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EditorsCardContainer = () => {
  const arts = useRecoilValue(artState)

  return (
    <WrapperContainer>
      {arts.map((art, index) => {
        const { artImg, name, no, ownerPic, ownerName, bid, id } = art;

        return (
          <EditorsCard
            id={id}
            artImg={artImg}
            name={name}
            no={no}
            ownerPic={ownerPic}
            ownerName={ownerName}
            bid={bid}
            key={index}
          />
        );
      })}
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 992px) {
    justify-content: space-between;
  }
`;

const Wrapper = styled.aside`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 24px -1px rgba(184, 66, 208, 0.25);
  backdrop-filter: blur(25px);
  border: solid 1px #fcf7fd;

  max-width: 300px;

  img {
    width: 100%;
  }

  .name-no {
    display: flex;
    justify-content: space-between;
  }

  .bidder {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 20%;
      border-radius: 50%;
    }
  }

  .bid-btn {
    background: linear-gradient(270deg, #9933a2 -20.43%, #f91a9f 100%);
    outline: none;
    border: none;
    color: #fcf7fd;
    width: 6rem;

    &:hover {
      background: transparent;
      border: solid 1px #fcf7fd;
    }
  }
`;

export default EditorsCardContainer;
