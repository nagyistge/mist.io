define('app/views/machine_shell', ['text!app/templates/machine_shell.html', 'ember'],
    /**
     * Machine Shell View
     *
     * @returns Class
     */
    function(machine_shell_html, Command) {
        return Ember.View.extend({

            /**
             *  Properties
             */
            
            template: Ember.Handlebars.compile(machine_shell_html),
    
            
            /**
             * 
             *  Actions
             * 
             */
    
            actions: {
               
               
                submitClicked: function() {
                    Mist.machineShellController.submit();
                },
                
                backClicked: function() {
                    Mist.machineShellController.close();
                }
            }
        });
    }
);

