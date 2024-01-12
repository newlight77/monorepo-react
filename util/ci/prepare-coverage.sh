
mkdir -p coverage/unit
mkdir -p coverage/features
mkdir -p coverage/smoke

rm -f coverage/*.json


copyCoverageUnit() {
    path=$1
    packageName=$2
    # cp $currentPackage/coverage/lcov.info coverage/unit/$packageName.unit.lcov.info
    cp $path/$packageName/coverage/coverage-final.json coverage/unit/$packageName.unit.coverage-final.json
}

copyCoverageFeaturesCoreDomain() {
    path=$1
    packageName=$2
    # cp $path/$packageName/coverage/features-core-domain/lcov.info coverage/features/$packageName.features-core-domain.lcov.info
    cp $path/$packageName/coverage/features-core-domain/coverage-final.json coverage/features/$packageName.features-core-domain.coverage-final.json
}

copyCoverageFeaturesIt() {
    path=$1
    packageName=$2
    # cp $currentPackage/coverage/features-it/lcov.info coverage/features/$packageName.it.cucumber.lcov.info
    cp $path/$packageName/coverage/features-it/coverage-final.json coverage/features/$packageName.it.cucumber.coverage-final.json
}

copyCoverageFeaturesItApi() {
    path=$1
    packageName=$2
    # cp $currentPackage/coverage/features-it-api/lcov.info coverage/features/$packageName.it-api.cucumber.lcov.info
    cp $path/$packageName/coverage/features-it-api/coverage-final.json coverage/features/$packageName.it-api.cucumber.coverage-final.json
}

copyCoverageFeaturesCitApi() {
    path=$1
    packageName=$2
    # cp $currentPackage/coverage/features-cit-api/lcov.info coverage/features/$packageName.cit-api.cucumber.lcov.info
    cp $path/$packageName/coverage/features-cit-api/coverage-final.json coverage/features/$packageName.cit-api.cucumber.coverage-final.json
}

copyCoverageSmoke() {
    path=$1
    packageName=$2
    # cp $currentPackage/coverage/smoke/lcov.info coverage/smoke/$packageName.smoke.lcov.info
    cp $path/$packageName/coverage/smoke/coverage-final.json coverage/smoke/$packageName.smoke.coverage-final.json
}

### Unit
copyCoverageUnit apps                                      app-react
copyCoverageUnit packages/bounded-context/job-context      job-core
copyCoverageUnit packages/bounded-context/job-context      job-infrastructure
copyCoverageUnit packages/bounded-context/signup-context   signup-core
copyCoverageUnit packages/bounded-context/signup-context   signup-infrastructure

copyCoverageUnit packages/shared-lib                       logger
copyCoverageUnit packages/shared-module                    hello-world-api
copyCoverageUnit packages/shared-module                    keycloak-auth-config
copyCoverageUnit packages/shared-provider                  keycloak-client
copyCoverageUnit packages/shared-provider                  redis-client
copyCoverageUnit packages/shared-ui                        react-library

### feature core-domain
copyCoverageFeaturesCoreDomain packages/bounded-context/job-context      job-core
copyCoverageFeaturesCoreDomain packages/bounded-context/signup-context   signup-core

### feature it
copyCoverageFeaturesIt packages/bounded-context/job-context              job-infrastructure
copyCoverageFeaturesIt packages/bounded-context/signup-context           signup-infrastructure
copyCoverageFeaturesIt packages/shared-module                            hello-world-api

### feature it api
copyCoverageFeaturesItApi packages/bounded-context/job-context           job-infrastructure
copyCoverageFeaturesItApi packages/bounded-context/signup-context        signup-infrastructure
copyCoverageFeaturesItApi packages/shared-module                         hello-world-api

### feature cit
# not useful yet : no complex business process using mutiple components
# copyCoverageFeaturesCitApi apps                                          app-job

### smoke test
copyCoverageSmoke apps                                                app-job
copyCoverageSmoke apps                                                app-monolith
copyCoverageSmoke apps                                                app-signup
