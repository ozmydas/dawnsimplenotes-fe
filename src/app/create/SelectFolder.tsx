'use client';

import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";

export default function SelectFolder({ title, is_multi, selected_value, onValueChanged }: { title: string, is_multi: boolean, selected_value: string, onValueChanged: (e: { target: { name: any; value: any; }; }) => void }) {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // react-select hydrate fix
    if (!isClient) return null;
    // end fix

    const options = [
        { value: '', label: 'Root Folder' },
        { value: 'strawberry', label: '---- Strawberry' },
        { value: 'vanilla', label: '---- Vanilla' }
    ]

    const colourStyles: StylesConfig = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                color: "#444",
            };
        },
        input: (styles) => ({ ...styles }),
        placeholder: (styles) => ({ ...styles }),
        singleValue: (styles, { data }) => ({ ...styles }),
    };

    const valueChanged = (val: any) => {
        if (is_multi) {
            return valueMultiChanged(val)
        }

        let val_value = val == null ? "" : val.value;

        console.log("☑️", val_value)

        onValueChanged({
            target: {
                name: "path_code",
                value: val_value
            }
        })
    }

    const valueMultiChanged = (val: any) => {
        let array_val = val.map((opt: any) => {
            return opt.value
        })

        console.log("☑️", array_val)

        onValueChanged({
            target: {
                name: "tags",
                value: array_val
            }
        })
    }

    return <div className="mb-8">
        <div>{title}</div>
        <CreatableSelect
            isClearable
            isMulti={is_multi}
            closeMenuOnSelect={!is_multi}
            placeholder="Select Available Options or Type to Create New..."
            options={options}
            styles={colourStyles}
            onChange={valueChanged} />
    </div>
}