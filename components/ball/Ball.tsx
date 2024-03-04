interface ColorType {
    [propName: string]: string;
}
export default function Ball({ color }: { color: string }) {

    const colors: ColorType = {
        red: 'bg-red-400',
        yellow: 'bg-yellow-400',
        green: 'bg-green-400',
    }

    return (
        <>
            <div className={`w-3 h-3 inline-block rounded-full ${colors[color]}`} />
        </>
    );
}

