export class SiteMeta {

    constructor(
        public siteName : string,
        public siteDescription : string
    ) {}

    static fromJson({ siteName, siteDescription }): SiteMeta {
        return new SiteMeta( siteName, siteDescription );
    }

}
