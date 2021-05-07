import React, { FunctionComponent } from "react";
import Quirk from "quirks/Quirk";

type QuirkBoxProps = {
    quirk: Quirk;
};

const QuirkBox: FunctionComponent<QuirkBoxProps> = ({ quirk }) =>
    <div>
        {quirk.outputText}
    </div>;

export default QuirkBox;