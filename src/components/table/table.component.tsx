import {Tbody, Th, Thead, Tr, Table} from "@chakra-ui/react";
import React from 'react';
import TrComponent from "./tr.component";

interface INormal {
    header: string | number,
    accessor: string | number
}

interface conditionMap {
    [key: string | number] : string | number
}


interface IMedium {
    header: string | number,
    accessor: string | number,
    conditions: conditionMap
}

interface IActionProps {
    label: string | number,
}

interface IActions {
    header: string | number,
    options: Array<IActionProps>
}

interface IProps {
    columns : Array<INormal | IMedium | IActions>,
    data: any,
    onSelected: any
}



const TableComponent = ({columns, data, onSelected} : IProps) => {

    function selectedRow(row: any) {
        onSelected(row)
    }

    return (<Table variant='simple'>
        <Thead>
            <Tr>
                {columns.map((item: any, index: any) => <Th key={index}>{item.header}</Th>)}
            </Tr>
        </Thead>
        <Tbody>
            {data.map((item: any, index: any) => <TrComponent onSelected={(selectedItem: any) => {
                selectedRow(selectedItem)
            }} key={index} columns={columns} item={item}/>)}
        </Tbody>
    </Table>)
}

export default TableComponent