import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { artIdState, artState } from '../atoms/artsAtom';
import { modalState } from '../atoms/modaAtom';

export default function Example() {
    const [modalStateValue, setModalStateValue] = useRecoilState(modalState)
    const artIdValue = useRecoilValue(artIdState)
    const arts = useRecoilValue(artState)

    const foundArt = arts.find(art => art.id === String(artIdValue))

    console.log(foundArt)

    return (
        <>
            {modalStateValue && <div className="modal" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p >{foundArt.no}</p>
                            <button type="button" className="btn-close" onClick={() => setModalStateValue(false)}></button>
                        </div>
                        <div className="modal-body">
                            <div className="img">
                                <img src={foundArt.artImg} alt={foundArt.ownerName} />
                            </div>
                            <div className="name">
                                <h4>{foundArt.name}</h4>
                                <p>
                                    Owned by: <span>{foundArt.ownerName}</span>
                                </p>
                                <p>
                                    Current bid: <span>{foundArt.bid}</span>
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a target="_blank"
                                href="https://opensea.io/"
                                rel="noreferrer">
                                <button className='btn bid-btn'>Bid now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}
