import React from 'react'
import _ from 'lodash'
import '../../styles/chart.css'

const Column = ({data}) => {
    const { name, male, female, height } = data
    return (
        <div style={{flex: 1, display: 'flex', flexFlow: 'column nowrap', justifyContent: 'flex-end', alignItems: 'center'}} >
            <div style={{textAlign: 'center'}} >{data.height}</div>
            <div style={{width: 20, height, background: `linear-gradient(#ff3d98, #f9a716 ${male}%, #246dd5 ${male}%, #293ebd)`, borderTopLeftRadius: 10, borderTopRightRadius: 10}} ></div>
        </div>
    )
}

export default class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const list = [
            {
                name: 'aaaaa',
                male: 30,
                female: 70,
                height: 90
            },
            {
                name: 'bbbbb',
                male: 35,
                female: 65,
                height: 40
            },
            {
                name: 'ccccc',
                male: 50,
                female: 50,
                height: 50
            },
            {
                name: 'ddddd',
                male: 0,
                female: 10,
                height: 190
            },
            {
                name: 'eeeee',
                male: 70,
                female: 30,
                height: 70
            },
        ];
        return (
            <div style={{width: 600, margin: '20px auto'}} >
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', borderLeft: '1px solid #ccc', borderBottom: '1px solid #ccc'}} >
                    {
                        _.map(list, (data, index) => (
                            <Column key='index' data={data} />
                        ))
                    }
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 30 }} >
                    {
                        _.map(list, (data, index) => (
                            <div>{data.name}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}