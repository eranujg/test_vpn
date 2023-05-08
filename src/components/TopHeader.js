import React from 'react';
import ButtonTooltip from './tooltip/ButtonTooltip';

const TopHeader = () => {
    return (
        <div className="bg-neutral-200 py-2 px-4 font-normal text-sm leading-4 text-center text-gray-500">
            We receive advertising fees from the service providers we rank below.
            <ButtonTooltip
                tooltipContent={
                    <p>We may receive an affiliate commission if you use a link on this site to purchase a VPN subscription. This commission helps us maintain and operate the site, and it has no influence on the price of your subscription.</p>
                }
            >
                Advertising Disclosure
            </ButtonTooltip>
        </div>
    );
}
export default TopHeader;