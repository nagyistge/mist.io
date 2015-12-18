define('app/models/template', ['app/models/base'],
    //
    //  Template Model
    //
    //  @returns Class
    //
    function (BaseModel) {

        'use strict';

        return BaseModel.extend({

            convertProperties: {
                'exec_type': 'type',
                'location_type': 'source',
            }

        });
    }
);