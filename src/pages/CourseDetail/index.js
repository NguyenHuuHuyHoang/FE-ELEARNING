import React from 'react'

export default function CourseDetail(props) {
    const {match} = props
    console.log(match)
    return (
        <div>
        hello {match.params.id}
        </div>
    )
}
