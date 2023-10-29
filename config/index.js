const config = {
    connectionString: "mongodb://IndexerApp:password@127.0.0.1:27017/IndexerAppDb",
    
    maxDateDifference: 15778800000, // 6 months in milliseconds

    tagWeights: {
        META: 5,
        TITLE: 5,
        H1: 4,
        H2: 3,
        H3: 2,
        H4: 2,
        H5: 1,
        H6: 1,
        P:  2,
    },

}

export default config;