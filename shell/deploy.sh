#!/bin/bash
BUCKET=bravenew.tech
yarn build production
aws s3 sync build/static s3://${BUCKET}/static
aws s3 cp build/favicon.ico s3://${BUCKET}/
aws s3 cp build/asset-manifest.json s3://${BUCKET}/
aws s3 cp build/service-worker.js s3://${BUCKET}/
aws s3 cp build/index.html s3://${BUCKET}/ --cache-control 'no-cache, no-store, must-revalidate'
