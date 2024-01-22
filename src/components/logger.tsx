
import React from "react";

// Generally starts with for HOC as easier identifier
export function withLogProps<T>(OriginalComponent: any) {
    return function (props: React.HTMLAttributes<T>) {
        console.info("Props:: ", props);
        return <OriginalComponent {...props} />
    }
}
