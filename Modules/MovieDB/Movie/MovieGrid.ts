import { Decorators, EntityGrid, QuickSearchField } from '@serenity-is/corelib';
import { MovieColumns, MovieRow, MovieService } from '../../ServerTypes/MovieDB';
import { MovieDialog } from './MovieDialog';

@Decorators.registerClass('MovieTutorial.MovieDB.MovieGrid')
export class MovieGrid extends EntityGrid<MovieRow, any> {
    protected getColumnsKey() { return MovieColumns.columnsKey; }
    protected getDialogType() { return MovieDialog; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getQuickSearchFields(): QuickSearchField[] {
        return [
            { name: "", title: "all" },
            { name: "Description", title: "description" },
            { name: "Storyline", title: "storyline" },
            { name: "Year", title: "year" }
        ];
    }
}