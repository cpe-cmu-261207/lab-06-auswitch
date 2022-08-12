import React, { useState } from "react";
import {
    IconChevronDown,
    IconChevronUp,
} from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props){
    const [click, setClick] = useState(false);

    return(
        <div className="border-bottom"
            onClick={() => { click ? setClick(false) : setClick(true); }}
        >
            <div className="d-flex align-items-center p-3">
                <img src={props.imgUrl}
                    width="90px"
                    class="rounded-circle me-4"
                />
                <span className="text-center display-6 me-auto">{props.name}</span>
                {!click && <IconChevronDown />}
                {click && <IconChevronUp />}
            </div>

            {
                click &&
                <UserCardDetail 
                    email={props.email}
                    address={props.address}
                />
            } 

        </div>
    );
}