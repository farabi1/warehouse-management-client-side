import Item from "./Item";
import { ELEMENTS, SERVICE, ORGANIZATION, MAINTENANCE } from "./FooterMenu";
const ItemsSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10 ">
            <div className="flex justify-center">
                <Item Links={ELEMENTS} title="ELEMENTS" />
            </div>
            <div className="flex justify-center">
                <Item Links={SERVICE} title="SERVICE" />
            </div>
            <div className="flex justify-center">
                <Item Links={ORGANIZATION} title="ORGANIZATION" />
            </div>
            <div className="flex justify-center">
                <Item Links={MAINTENANCE} title="MAINTENANCE" />
            </div>
        </div>
    );
};

export default ItemsSection;