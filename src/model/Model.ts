import { ArrayCollection, IArrayCollection } from 'enta';
import IMovie from '../vo/IMovie';
import IProviderItem from '../vo/IProviderItem';
import ProviderItem from '../vo/ProviderItem';

export default class Model {
    private static _movies: IArrayCollection<IMovie>;
    public static get movies(): IArrayCollection<IMovie> {
        if (!this._movies) {
            this._movies = new ArrayCollection();
        }
        return this._movies;
    }

    private static _providerItems: IArrayCollection<IProviderItem>;
    public static get providerItems(): IArrayCollection<IProviderItem> {
        if (!this._providerItems) {
            this._providerItems = new ArrayCollection([
                new ProviderItem('/alle', 'Alle Film', 'alle'),
                new ProviderItem('/prime', 'Amazon Prime', 'prime'),
                new ProviderItem('/itunes', 'Apple Itunes', 'itunes'),
                new ProviderItem('/appletv', 'Apple TV+', 'appletv'),
                new ProviderItem('/blockbuster', 'Blockbuster', 'blockbuster'),
                new ProviderItem('/disney', 'Disney+', 'disney'),
                new ProviderItem('/hbo', 'HBO', 'hbo'),
                new ProviderItem('/netflix', 'Netflix', 'netflix'),
                new ProviderItem('/netflixboern', 'Netflix Børn', 'netflixboern'),
                new ProviderItem('/paramount', 'Paramount+', 'paramount'),
                new ProviderItem('/viaplay', 'Viaplay', 'viaplay'),
                new ProviderItem('/tv2', 'TV 2', 'tv2')
            ]);
        }
        return this._providerItems;
    }
}
