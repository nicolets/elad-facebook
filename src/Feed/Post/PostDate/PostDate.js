import React, { useMemo } from 'react';
import './PostDate.scss';
import { formatDistanceToNow } from 'date-fns';


function PostDate({ date }) {
    const formattedDate = useMemo(() => {
        return formatDistanceToNow(new Date(date), {
            addSuffix: true
        });
    }, [date])

    return (
        <span>{formattedDate}</span>
    );
}

export default PostDate;