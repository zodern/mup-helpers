let verified = false;

WebApp.connectHandlers.use("/___mup_verify", (req, res, next) => {
    if (!verified) {
        res.writeHead(200);
        res.end("Verified");
        verified = true;
    } else {
        next();
    }
});

